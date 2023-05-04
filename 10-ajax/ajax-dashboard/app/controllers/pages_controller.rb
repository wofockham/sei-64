class PagesController < ApplicationController
  def home
    @brother = %w[ Groucho Harpo Chico ].sample
    @time = Time.now
    @uptime = `uptime`
    @calls_on_hold = rand 1..50
    @bushfires = rand 50..1000
  end
end
