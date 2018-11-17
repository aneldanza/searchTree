# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Question.destroy_all

User.create({username: 'demo', password: 'hunter2', email: 'email@email.com'});
User.create({username: 'Bill', password: 'hunter2', email: 'bill@email.com'});
User.create({username: 'Mark', password: 'hunter2', email: 'Mark@email.com'});
User.create({username: 'Steve', password: 'hunter2', email: 'Steve@email.com'});
User.create({username: 'Anel', password: 'hunter2', email: 'Anel@email.com'});


Question.create({title: "How do I return the response from an asynchronous call?
  ",
body: "I need to unblock mixed content to view an un-secure webpage on secured website. I cant find a way to do that. If I click shield or lock icon it doesn't give me an option to load the content. I'm using OS-X. ",
tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]", user_id: User.first.id})

Question.create({
  title: "How to implement third-party impressions tracking URL from Sizmek?",
  body: "You call your friend again for the same reason. But this time you tell him that you are in a hurry and he should call you back on your mobile phone. You hang up, leave the house and do whatever you planned to do. Once your friend calls you back, you are dealing with the information he gave to you.",
  tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]",
  user_id: User.second.id
})

Question.create({title: "How to enable mixed content in Chrome using OS-X?",
body: "I need to unblock mixed content to view an un-secure webpage on secured website. I cant find a way to do that. If I click shield or lock icon it doesn't give me an option to load the content. I'm using OS-X. ", 
tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]",user_id: User.third.id})

Question.create({
  title: "How to implement third-party impressions tracking URL from Sizmek?",
  body: "The A in Ajax stands for asynchronous . That means sending the request (or rather receiving the response) is taken out of the normal execution flow. In your example, $.ajax returns immediately and the next statement, return result;, is executed before the function you passed as success callback was even called.

  Here is an analogy which hopefully makes the difference between synchronous and asynchronous flow clearer:",
  tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]",
  user_id: User.fourth.id
})

Question.create({title: "How to enable mixed content in Chrome using OS-X?",
body: "I need to unblock mixed content to view an un-secure webpage on secured website. I cant find a way to do that. If I click shield or lock icon it doesn't give me an option to load the content. I'm using OS-X. ", 
tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]",user_id: User.fifth.id})

Question.create({
  title: "How to implement third-party impressions tracking URL from Sizmek?",
  body: "I've received 2 third-party tracking links for an Expanding banner ad. One of them is for Click Tracking and another is for Imps tracking.",
  tags: "[{value: 'macOS', type: 'code'}, {value: 'ruby', type: 'code' }]",
  user_id: User.first.id
})


Answer.create({
  body:'The idea is that you need to pass a callback function as an argument to your asynchronous function. And that callback will be called once the asynchronous function is ready to return the payload. The payload is being send back as an argument of the callback function. Your code example may be re-written as follows:',
  user_id: User.first.id,
  question_id: Question.fifth.id,
})

Answer.create({
  body:'The idea is that you need to pass a callback function as an argument to your asynchronous function. And that callback will be called once the asynchronous function is ready to return the payload. The payload is being send back as an argument of the callback function. Your code example may be re-written as follows:',
  user_id: User.second.id,
  question_id: Question.fourth.id,
})

Answer.create({
  body:'The idea is that you need to pass a callback function as an argument to your asynchronous function. And that callback will be called once the asynchronous function is ready to return the payload. The payload is being send back as an argument of the callback function. Your code example may be re-written as follows:',
  user_id: User.third.id,
  question_id: Question.last.id,
})

Answer.create({
  body:'The idea is that you need to pass a callback function as an argument to your asynchronous function. And that callback will be called once the asynchronous function is ready to return the payload. The payload is being send back as an argument of the callback function. Your code example may be re-written as follows:',
  user_id: User.second.id,
  question_id: Question.first.id,
})