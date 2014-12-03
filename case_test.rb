def location_attr(location_data)
	if location_data.nil?
		puts "nil"
	else
  	case location_data.size
	    when 6 then puts 6
	    when 5 then puts 5
	    when 4 then puts 4
   		when 3 then puts 3
    	when 2 then puts 2
    	else puts 1
  	end
  end
end

arr_two   = [1]
arr_three = [1,1]
arr_four  = [1,1,1]
arr_five  = [1,1,1,1]
arr_one   = [1,1,1,1,1]
arr_six   = [1,1,1,1,1,1]

location_attr(arr_one)
location_attr(arr_two)
location_attr(arr_three)
location_attr(arr_four)
location_attr(arr_five)
location_attr(arr_six)
location_attr(nil)