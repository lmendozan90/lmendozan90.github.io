def find_best_occurency(text, array)
  best_word = ""
  capitals = 0
  size = 0
  array.each do |word|
    if word.downcase.include?(text.downcase)
      if capitals < word.scan(/[A-Z]/).count
        capitals = word.scan(/[A-Z]/).count
        best_word = word
        size = word.size
      elsif capitals == word.scan(/[A-Z]/).count
        if size < word.size
          size = word.size
          best_word = word
        end
      end
    end
  end
  best_word
end

# Iterate over array and check if the word contains the text
# If it does, check if the word has more capital letters than the current best_word
# If it does, update the best_word
# If it has the same amount of capital letters, check if the word is shorter than the current best_word
# If it is, update the best_word
def find_best_occurrence2(text, array)
  best_word = ""
  highest_capitals = 0
  shortest_size = Float::INFINITY

  array.each do |word|
    next unless word.downcase.include?(text.downcase)

    capital_count = word.count("A-Z")
    word_size = word.size

    if word_size < shortest_size || ( word_size == shortest_size && capital_count > highest_capitals)
      best_word = word
      highest_capitals = capital_count
      shortest_size = word_size
    end
  end

  best_word
end


text = "Hola"
array = ["Holaaaaa", "Hola", "HOLA", "HOLAAAA", "AAAAA"]
result = find_best_occurrence2(text, array)
puts "result: #{result}"
