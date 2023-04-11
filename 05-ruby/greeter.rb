# greeter.rb - an introduction to Ruby terminal input and output

puts "Welcome to the greeter program"

print "What is your name: " # print does not include a trailing new line
name = gets.chomp # gets: get a string from the keyboard, chomp: removes a trailing new line

puts "Hello #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname }."

print "Where do you live: "
address = gets.chomp

puts "#{ name } #{ surname.upcase } lives at #{ address }."
