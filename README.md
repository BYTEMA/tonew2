## Loot Bot

[![Build Status](https://travis-ci.org/damoresa/loot-bot.svg?branch=master)](https://travis-ci.org/damoresa/loot-bot)

_loot-bot_ has been developed to ease managing loot on the MMO [Tibia](http://www.tibia.com).  
The application consists of a [_Discord_](https://discordapp.com/) bot and a _VueJS_ web application.
  
All authentication is managed throught _Discord_ meaning you __need__ a _Discord_ 
account in order to use the application.

### Features

* Submit loot reports: storing statistical information about your hunt.
* Manage loot shares: share the hunt code with your team mates and allow them 
to add their expenses, the application will automatically share loot.
* Track your statistics: keep track of your hunts and the amount of experience, 
total loot and your share of said loot easily.

### Loot distribution

Your share of the loot is calculated following these steps:

1. Sum all the reported expenses for the hunt.
1. Calculate whether the total loot value is higher than the total expenses value.
   1. If the loot is higher (_profit_) - everyone is given their expense and then the remainder is shared evenly.
   1. If the expenses are higher (_waste_) - everyone is given a percentage or the loot proportional to their reported expense.

### Future features

- [x] Submit loot reports through the web application.
- [x] Submit expenses through the web application.
- [x] Balance per reporter on hunt balance request.
- [x] Mark hunts as paid. Add filters to search for paid/unpaid hunts.
- [x] Generate a pin code for hunts so only "_authorized_" persons can submit expenses.

### Possible future features

* Attach your characters to your _Discord_ account.
* Receive recommendations on what to hunt depending on your results.