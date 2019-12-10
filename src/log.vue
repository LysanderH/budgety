<template>
  <div class="container clearfix">
    <div class="income">
      <h2 class="icome__title">Revenus</h2>
      <div class="income__list">
        <div class="item clearfix" id="income-0" v-for="income in income">
          <div class="item__description">{{income.text}}</div>
          <div class="right clearfix">
            <div class="item__value">+ {{income.value}}</div>
            <div class="item__delete">
              <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="expenses">
      <h2 class="expenses__title">Expenses</h2>

      <div class="expenses__list">
        <div class="item clearfix" id="expense-0" v-for="expense in expenses">
          <div class="item__description">{{expense.text}}</div>
          <div class="right clearfix">
            <div class="item__value">{{expense.value}}</div>
            <div class="item__percentage">21%</div>
            <div class="item__delete">
              <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "log",
  computed: {
    ...mapState(["income"]),
    ...mapState(["expenses"])
  }
};
</script>

<style>
</style>