# Nutshell: The Information Dashboard

Thank you for choosing the Bountiful Brazil Nuts to complete your project. To enjoy Nutshell, please follow the steps below on your local machine.

### Required software 
Please download and install the following software to use Nutshell. 
• JSON server

## To download and run, open your Terminal and enter the following commands

1. `git clone https://github.com/nss-cohort-40/nutshell-c40-bountiful-brazil-nuts.git`
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory, and copy the following code into it: 
```json 
{
  "users": [],
  "friends": [],
  "messages": [],
  "events": [],
  "tasks": [],
  "articles": []
}
```
1. In your termninal, run JSON server using `json-server -p 8088 -w database.json`
1. Open a new terminal tab and and start your server
1. Visit the address in your web browser

## About Nutshell

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

### About Bountiful Brazil Nuts
We are based out of Nashville, TN and are partnered with Nashville Software School. 

And that's about it...
