class PagesController < ApplicationController
    def home
    end

    def hamldemo
        @lucky = rand 1..40
        @bros = %w( Groucho Harpo Chico Zeppo Gummo )
    end
end
