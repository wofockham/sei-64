# 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
# 7! = 7 * 6!
#          6 * 5!


def factorial_iterative(n) # initial
    result = 1
    while n > 0            # conditional
        result *= n        # mutation
        n -= 1             # mutation
    end
    result
end

def factorial_recursive(n)             # initial
    if n <= 1                          # base case
        1
    else
        n * factorial_recursive(n - 1) # move towards the base case: no mutation
    end
end

binding.irb
