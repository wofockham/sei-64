# ### 3. Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you reside: "
residence = gets.chomp.capitalize

# v2 case
puts case residence
when 'Bondi'
    "Wow beaches etc"
when 'Glebe'
    "Nice foreshore walk"
when 'Roseville'
    "Lah di dah"
else
    "I'm sure that's a very nice place"
end

# v1 if/elsif
# if residence == 'Bondi'
#     puts "Wow beaches etc"
# elsif residence == 'Glebe'
#     puts "Nice foreshore walk"
# elsif residence == 'Roseville'
#     puts "Lah di dah"
# else
#     puts "I'm sure that's a very nice place"
# end

