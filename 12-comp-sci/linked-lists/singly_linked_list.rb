class SinglyLinkedList
    include Enumerable # mixin: simulates inheriting from multiple classes

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
        if @head
            previous_head = @head
            @head = previous_head.next
            previous_head.value
        end
    end

    def insert_after(node, new_value)
    end

    def find(needle) # return the node with the value of needle (or nil)
    end

    # Tricky
    def reverse # non-destructive
        reversed_list = SinglyLinkedList.new
        current_node = @head
        while current_node
            reversed_list.prepend current_node.value
            current_node = current_node.next
        end
        reversed_list
    end

    # Trickier
    def reverse! # destructive!
        @head = self.reverse.head
    end

    # Trickiest
    def each # how do execute a block in Ruby?
        current_node = @head
        while current_node
            yield current_node.value if block_given? # execute the do/end block
            current_node = current_node.next
        end
        self
    end

    # Bonus: .map, .reduce, .select, .reject, .length AKA .size AKA .count
    # Bonus: bros.at_index(3) # equivalent to bros[3]
end

bros = SinglyLinkedList.new('Groucho').append('Chico').append('Harpo').append('Gummo')
bros.each do |name|
    puts name
end

binding.irb
