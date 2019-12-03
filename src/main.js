import Vue from "vue";

new Vue({
    el:'#app',
    data:{
        income: [{text: 'tatata', value:10}, {text: 'blub', value:1010}],
        expenses: [{text: 'tatata', value:-10}, {text: 'blub', value:-100}],
        total: 0,
        posOrNeg: 'inc',
        description: '',
        value: 0,
    },
    methods:{
        getDate(){
            const date = new Date();
            const createdDate = date.now;
            return new Intl.DateTimeFormat('fr-FR', {month: 'long', year: 'numeric'}).format(createdDate);
        },
        stockValues(e){
            console.log('it works');
            if(this.posOrNeg === 'inc') {
                this.income.push({text: this.description, value: Number(this.value)});
            }else{
                this.expenses.push({text: this.description, value: Number('-' + this.value)})
            }
            this.posOrNeg = 'inc';
            this.value = 0;
            this.description = '';
        },
    },
    // Computed brauchen immer einen Return
    computed:{
        calculateTotalIncome(){
            let totalIncome = 0
            for (let i = 0; i < this.income.length; i++) {
                totalIncome += this.income[i].value;
            }
            return totalIncome
        },
        calculateTotalExpenses(){
            let totalExpenses = 0
            for (let i = 0; i < this.expenses.length; i++) {
                totalExpenses += this.expenses[i].value;
            }
            return totalExpenses
        },
        calculatePercent(){
            return Math.abs(Math.round(this.calculateTotalIncome / this.calculateTotalExpenses*100)/100);
        },
        calculateTotal(){
            return new Intl.NumberFormat('fr-FR',{style: 'currency', currency: 'EUR'}).format(this.calculateTotalIncome + this.calculateTotalExpenses);
        },
        calculateExpensesPercentage(){
            
        }
    }
})