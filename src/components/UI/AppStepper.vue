<template>
  <div class="stepper">
    <button
      class="stepper__button stepper__button_action_subtract"
      @click="decrement"
    >
      -
    </button>
    <input
      class="stepper__input"
      v-model="stepperValue"
      @input="changeStepperValue($event.target as HTMLInputElement)"
      type="number"
    />
    <!-- @update:modelValue="changeStepperValue($event as unknown as number | '')" -->
    <!-- <input
      class="stepper__input"
      :value="stepperValue"
      @input="changeStepperValue($event.target as HTMLInputElement)"
      type="number"
    /> -->
    <button
      class="stepper__button stepper__button_action_add"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<!-- TODO: ПЕРЕПИСАТЬ КОМПОНЕНТ -->
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

// interface InputFileEvent extends Event {
//   target: HTMLInputElement;
// }

export default defineComponent({
  name: "AppStepper",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const stepperValue = ref<number>(props.value);

    const increment = () => {
      // if (number.value >= 3) {
      //   console.log("Мы не отдаем больше 3-х пар в одни руки");
      //   return;
      // }
      stepperValue.value++;
      // emit("update:value", stepperValue);
    };
    const decrement = () => {
      if (+stepperValue.value <= 1) return;
      stepperValue.value--;
      // emit("update:value", stepperValue);
    };

    const changeStepperValue = (target: HTMLInputElement) => {
      console.log(target.value);

      // if (target.value === "") {
      //   stepperValue.value = 1;
      //   return;
      // }

      const tmp = parseInt(target.value.replace(/[e,+,-]/g, ""));

      if (tmp) {
        stepperValue.value = tmp;
      } else {
        stepperValue.value = 1;
      }
      console.log(stepperValue.value);
    };

    watch(stepperValue, () => {
      emit("update:value", stepperValue.value || 1);
      // if (stepperValue.value === "") {
      //   stepperValue.value = 1;
      // }
    });

    return {
      stepperValue,
      increment,
      decrement,
      changeStepperValue,
    };
  },
});
</script>

<style lang="scss">
.stepper {
  &__button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eeb960;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
      transform: translateY(3px);
    }
    &:active {
      transform: translateY(4px);
      background-color: lighten(#eeb960, 6.25%);
    }

    &_action {
      &_add {
        // color: #332b25;
      }
      &_subtract {
        // color: #332b25;
      }
    }
  }
  &__input {
    width: 80px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 8px;
    margin-right: 8px;

    text-align: center;
    border: 2px solid #eeb960;
    border-radius: 50px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
