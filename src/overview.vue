<template>
  <div class="top">
    <div class="budget">
      <div class="budget__title">
        Budget total en
        <span class="budget__title--month">{{ getDate() }}</span>:
      </div>

      <div class="budget__value">{{ calculateTotal }}</div>

      <div class="budget__income clearfix">
        <div class="budget__income--text">Revenus</div>
        <div class="right">
          <div class="budget__income--value">{{ calculateTotalIncome }}</div>
          <div class="budget__income--percentage">&nbsp;</div>
        </div>
      </div>

      <div class="budget__expenses clearfix">
        <div class="budget__expenses--text">Dépenses</div>
        <div class="right clearfix">
          <div class="budget__expenses--value">{{ calculateTotalExpenses }}</div>
          <div class="budget__expenses--percentage">{{ calculatePercent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "overview",

  methods: {
    getDate() {
      const date = new Date();
      const createdDate = date.now;
      return new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        year: "numeric"
      }).format(createdDate);
    }
  },
  computed: {
    ...mapState(["income"]),
    ...mapState(["expenses"]),
    calculateTotalIncome() {
      let totalIncome = 0;
      for (let i = 0; i < this.income.length; i++) {
        totalIncome += this.income[i].value;
      }
      return totalIncome;
    },
    calculateTotalExpenses() {
      let totalExpenses = 0;
      for (let i = 0; i < this.expenses.length; i++) {
        totalExpenses += this.expenses[i].value;
      }
      return totalExpenses;
    },
    calculatePercent() {
      return Math.abs(
        Math.round(
          (this.calculateTotalIncome / this.calculateTotalExpenses) * 100
        ) / 100
      );
    },
    calculateTotal() {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR"
      }).format(this.calculateTotalIncome + this.calculateTotalExpenses);
    }
  }
};
</script>

<style></style>
