# lr.rb - A Ruby command line file reader
# (equivalent to cat)

# Usage: ruby lr.rb somefilename.txt

# ARGF is a built-in Ruby variable containing the lines of the files
# mentioned as command line arguments.

ARGF.each do |line|
    puts line
end