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


Question.create({title: "How to enable mixed content in Chrome using OS-X?",
body: "I need to unblock mixed content to view an un-secure webpage on secured website. I cant find a way to do that. If I click shield or lock icon it doesn't give me an option to load the content. I'm using OS-X. ", user_id: User.first.id})

Question.create({
  title: "How to implement third-party impressions tracking URL from Sizmek?",
  body: "I've received 2 third-party tracking links for an Expanding banner ad. One of them is for Click Tracking and another is for Imps tracking.",
  user_id: User.second.id
})