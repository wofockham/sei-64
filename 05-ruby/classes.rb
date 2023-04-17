class Butterfly < ActiveRecord::Base
end

# Classes product objects.
# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the structure or the shape.
# Also: unlike a Ruby hash, an object can have custom methods (functions inside the object).

# name, instrument, vice
class MarxBrother
    # Macro to write getters and setters for you
    attr_accessor :name, :instrument, :vice
end

groucho = MarxBrother.new
groucho.name = 'Groucho'
groucho.vice = 'cigars'
groucho.instrument = 'guitar'
groucho.set_thing = 'whatever'

binding.irb