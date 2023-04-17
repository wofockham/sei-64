# Classes product objects.
# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the structure or the shape.
# Also: unlike a Ruby hash, an object can have custom methods (functions inside the object).

class Actor
    def award_speech
        "I would like to thank my agent and my partner. We did it, baby!"
    end

    def deny_allegations
        "I deny that and I don't remember and I was drunk and he's not my type"
    end
end

class Stooge < Actor
    def terrible?
        true
    end
end

# name, instrument, vice
class MarxBrother < Actor
    # Macro to write getters and setters for you
    attr_accessor :name, :instrument, :vice

    def initialize(n='', i='', v='lampooning authority figures') # variadic
        @name = n
        @instrument = i
        @vice = v
    end

    def perform
        "My name is #{ @name } and I play the #{ @instrument }"
    end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'
chico = MarxBrother.new 'Chico', 'piano'

binding.irb
