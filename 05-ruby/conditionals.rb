# Ruby has a rich framework for asking questions (conditionals)

n = 1001

if n > 5 
    puts "Wow"
else
    puts "Nah"
end

# Multiple possibilites

grade = 'B'

if grade == 'A'
    puts "You are killing it"
elsif grade == 'B'
    puts "You are coasting fine"
elsif grade == 'C'
    puts "Adequate"
else # Default
    puts "Please see Tina after class."
end

# TODO: research Ruby's case statement

# Ruby's bonus conditionals

# Short AKA modifier AKA backwards conditional:
n = 15
puts "Wow" if n > 5

# unless: opposite of if
today_is_wednesday = false

# if today_is_wednesday == false
#     puts "Today is not Wednesday"
# end

# if !today_is_wednesday
#     puts "Today is not Wednesday"
# end

unless today_is_wednesday
    puts "Today is not Wednesday"
end

# unless also supports the modifier form
puts "Today is not Wednesday" unless today_is_wednesday
