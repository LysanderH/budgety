<template>
  <form action="#" method="post" @submit.prevent="stockValues">
    <div class="bottom">
      <div class="add">
        <div class="add__container">
          <select class="add__type" v-model="posOrNeg">
            <option value="inc" selected>+</option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            class="add__description"
            placeholder="Add description"
            v-model="description"
          />
          <input type="number" class="add__value" placeholder="Value" v-model="value" min="0" />
          <button class="add__btn" type="submit">
            <i class="ion-ios-checkmark-outline"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "entry-form",
  data: function() {
    return {
      posOrNeg: "inc",
      description: "",
      value: 0
    };
  },
  methods: {
    stockValues(e) {
      if (this.posOrNeg === "inc") {
        this.income.push({ text: this.description, value: Number(this.value) });
      } else {
        this.expenses.push({
          text: this.description,
          value: Number("-" + this.value)
        });
      }
      this.posOrNeg = "inc";
      this.value = 0;
      this.description = "";
    }
  },
  computed: {
    ...mapState(["income"]),
    ...mapState(["expenses"])
  }
};
</script>

<style></style>
