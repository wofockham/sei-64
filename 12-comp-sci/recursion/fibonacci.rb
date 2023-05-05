# Fibonacci Sequence
# 1 1 2 3 5 8 13 21 34 55 89
# fib(n) = fib(n-1) + fib(n-2)

def fibonacci_iterative(n)
    a = 1
    b = 1
    while n  > 2
        a, b = b, a + b # Atomic, parallel assignment
        n -= 1
    end

    b
end

def fibonacci_recursive(n)
    if (n <= 2)
        1
    else
        fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
    end
end

# Optional bonus homework for RECURSION LOVERS
# Make this faster

# Option 1: memoisation
# Option 2: iterative recursion

binding.irb
