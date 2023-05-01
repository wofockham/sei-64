class Bank
    attr_reader :name, :accounts

    def initialize(name)
        @name = name
        @accounts = {}
    end

    def create_account(account_name, starting_deposit)
        @accounts[account_name] = starting_deposit
    end

    def deposit(account_name, amount)
        @accounts[account_name] += amount
    end

    def withdraw(account_name, amount)
        @accounts[account_name] -= amount
    end

    def balance(account_name)
        @accounts[account_name]
    end
end
