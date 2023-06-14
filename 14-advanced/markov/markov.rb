# Usage: ruby markov.rb alice.txt

class Markov
    def initialize
        @corpus = {}
    end

    # Read an array words and link them together into a chain
    def slurp(words)
        while words.any?
            word = words.shift
            @corpus[word] ||= []
            @corpus[word] << words.first
        end
    end

    # Pick a random start word and follow it through the chain
    def rant
        next_word = @corpus.keys.sample
        while next_word
            print next_word + ' '
            next_word = @corpus[next_word].sample
            sleep 0.2
        end
    end
end

words = []
ARGF.each do |line|
    incoming_words = line.split /[^a-zA-Z0-9'’-]+/
    words.concat incoming_words
end

markov = Markov.new
markov.slurp words
markov.rant

# Try `gem search markov` for many more implementations.