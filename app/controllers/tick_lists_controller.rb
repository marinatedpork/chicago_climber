class TickListsController < ApplicationController

	def create
		tick_list = TickList.create!(tick_list_params)
		current_user.tick_lists << tick_list
		tick_list_views = [tick_list.to_drop_down, tick_list.to_sidebox_display].to_json
		render json: tick_list_views
	end

	def show
		@tick_list = current_user.tick_lists.find(params[:id])
		render partial: "show.html"
	end

	def add_climb
		tick_list = TickList.find(params[:id])
		tick_list.climbs << Climb.find(tick_list_params[:climb_id].to_i)
		render nothing: true
	end

	def delete_climb
		tick_list = TickList.find(params[:id])
		climb = Climb.find(params[:climb_id])
		tick_list.climbs.delete(climb)
		render nothing: true
	end

	def delete 
		TickList.find(params[:id]).destroy
		render nothing: true
	end

	def edit
		@tick_list = TickList.find(params[:id])
		@tick_list.update_attributes(name: tick_list_params[:name])
		render partial: "show.html"
	end

	# def download
 #    # Load the html to convert to PDF
 #    html = File.read("#{Rails.root}/public/example.html")
 #    # Create a new kit and define page size to be US letter
 #    kit = PDFKit.new(html, :page_size => 'Letter')
 #    # Load our stylesheet into the kit to have colors & formatting
 #    kit.stylesheets << "#{Rails.root}/public/styles.css"
 #    # Save the html to a PDF file
 #    kit.to_file("#{Rails.root}/public/example.pdf")
 #    # Render the html
 #    render :text => html
 #  end
	# end

  private

	def tick_list_params
		params.permit(:name, :id, :user_id, :climb_id)
	end
end