class DashboardController < ApplicationController
    def brother
        brother = %w[ Groucho Harpo Chico ].sample
        render :plain => brother
    end

    def time
        render :plain => Time.now
    end

    def uptime
        render :plain => `uptime`
    end

    def calls
        render :plain => rand(1..50)
    end
end