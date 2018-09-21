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
User.create({username: "Mark", password: 'hunter2', email: 'mark@email.com'});
User.create({username: "Steve", password: 'hunter2', email: 'steve@email.com'});
User.create({username: "Anel", password: 'hunter2', email: 'anel@email.com'});


Question.create({title: "How to enable mixed content in Chrome using OS-X?",
body: "I need to unblock mixed content to view an un-secure webpage on secured website. I cant find a way to do that. If I click shield or lock icon it doesn't give me an option to load the content. I'm using OS-X. ", user_id: User.first.id})

Question.create({
  title: "How to implement third-party impressions tracking URL from Sizmek?",
  body: "I've received 2 third-party tracking links for an Expanding banner ad. One of them is for Click Tracking and another is for Imps tracking.",
  user_id: User.second.id
})

Question.create({
  title: "How do I return the response from an asynchronous call?",

  body: "I have a function foo which makes an Ajax request. How can I return the response from foo?

  I tried returning the value from the success callback as well as assigning the response to a local variable inside the function and returning that one, but none of those ways actually return the response.",
  user_id: User.third.id
});

Question.create({
  title: "How to make a great R reproducible example",

  body: "When discussing performance with colleagues, teaching, sending a bug report or searching for guidance on mailing lists and here on Stack Overflow, a reproducible example is often asked and always helpful.

  What are your tips for creating an excellent example? How do you paste data structures from r in a text format? What other information should you include?
  
  Are there other tricks in addition to using dput(), dump() or structure()? When should you include library() or require() statements? Which reserved words should one avoid, in addition to c, df, data, etc.?",
  user_id: User.fourth.id
});

Question.create({
  title: "How do I compare strings in Java?",

  body: "I've been using the == operator in my program to compare all my strings so far. However, I ran into a bug, changed one of them into .equals() instead, and it fixed the bug.

  Is == bad? When should it and should it not be used? What's the difference?",
  user_id: User.fifth.id
});


Answer.create({
  body:"== tests for reference equality (whether they are the same object).
  
  Objects.equals() checks for null before calling .equals() so you don't have to (available as of JDK7, also available in Guava).
  
  String.contentEquals() compares the content of the String with the content of any CharSequence (available since Java 1.5).
  
  Consequently, if you want to test whether two strings have the same value you will probably want to use Objects.equals().",
  user_id: User.first.id,
  question_id: Question.last.id
});

Answer.create({
  body: "A minimal reproducible example consists of the following items:

  a minimal dataset, necessary to reproduce the error
  the minimal runnable code necessary to reproduce the error, which can be run on the given dataset.
  the necessary information on the used packages, R version, and system it is run on.
  in the case of random processes, a seed (set by set.seed()) for reproducibility
  Looking at the examples in the help files of the used functions is often helpful. In general, all the code given there fulfills the requirements of a minimal reproducible example: data is provided, minimal code is provided, and everything is runnable.
  
  ",
  user_id: User.second.id,
  question_id: Question.fourth.id
})

Answer.create({
  body: "Synchronous
  Imagine you make a phone call to a friend and ask him to look something up for you. Although it might take a while, you wait on the phone and stare into space, until your friend gives you the answer that you needed.
  
  The same is happening when you make a function call containing 'normal' code:",
  user_id: User.third.id,
  question_id: Question.third.id
});

Answer.create({
  body: "
  262
  down vote
  In Java all the variables you declare are actually 'references' to the objects (or primitives) and not the objects themselves.
  
  When you attempt to execute one object method, the reference asks the living object to execute that method. But if the reference is referencing NULL (nothing, zero, void, nada) then there is no way the method gets executed. Then the runtime let you know this by throwing a NullPointerException.
  
  Your reference is 'pointing' to null, thus 'Null -> Pointer'.
  
  The object lives in the VM memory space and the only way to access it is using this references. Take this example:",
  user_id: User.second.id,
  question_id: Question.first.id
})

Answer.create({
  body: "
  1175
  down vote
  +100
  PHP offers three different APIs to connect to MySQL. These are the mysql(removed as of PHP 7), mysqli, and PDO extensions.
  
  The mysql_* functions used to be very popular, but their use is not encouraged anymore. The documentation team is discussing the database security situation, and educating users to move away from the commonly used ext/mysql extension is part of this (check php.internals: deprecating ext/mysql).
  
  And the later PHP developer team has taken the decision to generate E_DEPRECATED errors when users connect to MySQL, whether through mysql_connect(), mysql_pconnect() or the implicit connection functionality built into ext/mysql.",
  user_id: User.first.id,
  question_id: Question.second.id
})