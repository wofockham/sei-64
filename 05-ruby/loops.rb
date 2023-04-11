# while true
#     puts "wow"
# end

# Control-c to cancel a running Ruby program

# while
# initialize, condtional, update

i = 0                      # initial
while i < 10               # conditional
    puts "i is now #{ i }"
    i += 1                 # update
end

# Bonus conditionals
# if => unless
# while => until

i = 0
until i == 10
    puts "i is now #{ i }"
    i += 1
end

# Iterators: Ruby's preferred method of iterating/looping
# No mess, no fuss

7.times { puts "hotdogs" }

7.times do
    puts "hotdogs!"
end

10.times do |i|
    puts "i is now #{ i }"
end

7.downto(0) do |current_value|
    puts "the current value is #{ current_value }"
end
