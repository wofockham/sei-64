def hello
    puts "Hello World!"
end

hello

# Input to a method: parameters/arguments
def sum(a, b)
    result = a + b
    puts "The result is #{ result }"
end

sum 5, 6

def hello(name="World") # Variadic
    puts "Hello #{ name }"
end

hello 'Henrietta'
hello # no crash: Hello World
# hello 7, 8, 9, "Greg"

# Output from a method: return value
def add(a, b)
    a + b # Implicit return: the last line of code is implicitly returned
end

puts "The sum of 8 and 4 is #{ add 8, 4 }"
