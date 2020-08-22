//Input elementi
const transType = document.querySelector("#inputs>form>#transaction-type");
const transDescription = document.querySelector("#inputs>form>#transaction-description");
const transAmount = document.querySelector("#inputs>form>#transaction-amount");
const transSubmit = document.querySelector("#inputs>form>#transaction-submit");

//Output elementi
const revenueContainer = document.querySelector("main>section.revenue");
const expenseContainer = document.querySelector("main>section.expense");

//Rezultat elementi
const totalRevenue = document.querySelector("header>.sum.revenue>span.amount");
const totalExpense = document.querySelector("header>.sum.expense>span.amount");
const balance = document.querySelector("header .balance.amount"); 

//Mesec
const month = document.querySelector("header>p>span.date");

export {transType,transDescription,transAmount,transSubmit,revenueContainer,expenseContainer,totalRevenue,totalExpense,balance,month}