
class SinglyLinkedList
    class Node
        attr_accessor :value, :next
    
        def initialize(value=nil)
            @value = value
            @next = nil
        end
    end
    
    attr_accessor :head

    def initialize(value=nil)
        @head = Node.new(value) unless value.nil?
    end

    def prepend(value) # aka .unshift
        node = Node.new value
        node.next = @head
        @head = node
        self # this allows chaining
    end

    def append(value) # aka .push
        last.next = Node.new value
        self # this allows chaining
    end

    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next # walking through the list
        end
        current_node
    end

    # TODO: more methods that would be nice
    def remove # remove the first node (opposite of prepend) AKA shift
    end

    def insert_after(node, new_value)
    end

    def find(needle) # return the node with the value of needle (or nil)
    end

    # Tricky
    def reverse # non-destructive
    end

    # Trickier
    def reverse! # destructive!
    end

    # Trickiest
    def each # how do execute a block in Ruby?
    end

    # Bonus: .map, .reduce, .select, .reject, .length AKA .size AKA .count
    # Bonus: bros.at_index(3) # equivalent to bros[3]
end

bros = SinglyLinkedList.new
bros = SinglyLinkedList.new 'Groucho'

binding.irb
