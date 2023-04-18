class PagesController < ApplicationController
    def hello
        render :hello
    end

    def goodbye
        render :goodbye
    end

    def funny
    end

    def helpers
        @amount = 2132.454349
        @large_number = 1231232323
        @phone = 2125551212

        @friend_count = 1
        @enemy_count = 97
    end
end
