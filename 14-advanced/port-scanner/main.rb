require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following command in another terminal:"
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
    scanlog = File.open 'scan.gnmap'
    @hosts = []

    scanlog.each do |line|
        next if line =~ /^#/ # ^ beginnng of the line achor -- matches at the begininning of the string

        m = line.match /Host: ([0-9.]+)/ # Capture the dotted quad IP address
        @hosts << m[1]
    end

    @hosts.uniq!

    erb :home
end
