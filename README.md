# U_MAP

## Neighborhood Map project - Prague

## Installation:

#### Part 1: Simple download
1.1 Clone or Download this repo:
```bash
$> git clone https://github.com/Martinka0/U-MAP
```
1.2 Unzip the repo. In the dist directory, double click the index.html file to launch the website in your browser.

#### Part 2: Local server 
2.1 To inspect the site on your phone, you can run a local server
 ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
2.2 Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```



#### PROJECT SPECIFICATIONS:

* Application utilizes the Google Maps API and FourSquare API.
* All data requests are retrieved in an asynchronous manner.
* Utilizes Error Handling.
* Code is properly separated based upon Knockout best practices using an MVVM pattern.
* Clicking a marker displays unique information about a location in an infoWindow.  
* Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied. 
* A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
* Includes a text input field and dropdown menu that filters the map markers and list items to locations matching the text input or selection. 
* Clicking a location on the list displays unique information about the location, and animates its associated map marker.



