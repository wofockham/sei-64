def countdown_iterative(n=10) # initial value
    while n >= 0              # conditional
        puts n
        n -= 1                # update: mutation
        sleep 1
    end
    puts "Blast off!"
end

# Loops are optional
def countdown_recursive(n=10)      # initial
    if n < 0                       # base case
        puts "Blast off!"
    else
        puts n
        sleep 1
        countdown_recursive n - 1  # move closer to the base case: no mutation
    end
end

binding.irb
