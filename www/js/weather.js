$(document).ready(function($) {
  var location = '';
  var fcttxt = [];
  $.ajax({
    url: 'http://api.wunderground.com/api/214e4dd6dd0038f2/geolookup/forecast/q/autoip.json',
    type: "get",
    typeData: "json",
    success: function(forecast) {
      $(forecast.forecast).each(function(index, value) {
        $("#data0").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[0].title + '</p>' +
          '<p id="highLo">High: ' + value.simpleforecast.forecastday[0].high['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[0].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[0].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[0].fcttext + "</p>");
        $("#data1").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[1].title + '</p>' +
          '<p id="highLo">Lo: ' + value.simpleforecast.forecastday[0].low['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[1].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[1].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[1].fcttext + "</p>");
        $("#data2").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[2].title + '</p>' +
          '<p id="highLo">High: ' + value.simpleforecast.forecastday[1].high['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[2].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[2].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[2].fcttext + "</p>");
        $("#data3").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[3].title + '</p>' +
          '<p id="highLo">Lo: ' + value.simpleforecast.forecastday[1].low['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[3].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[3].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[3].fcttext + "</p>");
        $("#data4").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[4].title + '</p>' +
          '<p id="highLo">High: ' + value.simpleforecast.forecastday[2].high['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[4].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[4].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[4].fcttext + "</p>");
        $("#data5").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[5].title + '</p>' +
          '<p id="highLo">Lo: ' + value.simpleforecast.forecastday[2].low['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[5].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[5].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[5].fcttext + "</p>");
        $("#data6").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[6].title + '</p>' +
          '<p id="highLo">High: ' + value.simpleforecast.forecastday[3].high['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[6].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[6].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[6].fcttext + "</p>");
        $("#data7").html(
          '<p id="dayOfWeek">' + value.txt_forecast.forecastday[7].title + '</p>' +
          '<p id="highLo">Lo: ' + value.simpleforecast.forecastday[3].low['fahrenheit'] + '</br>' +
          value.txt_forecast.forecastday[7].pop + '% precip.</p>' +
          '<img src="' + value.txt_forecast.forecastday[7].icon_url + '"><br/>' +
          "<p>" + value.txt_forecast.forecastday[7].fcttext + "</p>");
      })
    }
  })
});

$(document).ready(function($) {
  $.ajax({
    url: "http://api.wunderground.com/api/214e4dd6dd0038f2/geolookup/conditions/q/autoip.json",
    type: "get",
    typeData: "json",
    success: function(conditions) {
      $(conditions.current_observation).each(function(index, value) {
        $("#observationTime").html(
          '<p>' + value.observation_time + '</p>');
        $("#observationImage").html(
          '<img src="' + value.icon_url + '"></br><p>' + value.weather + '</p>');
        $("#observationTemp").html(
          '<p>' + value.temp_f + ' F</p>');
        $("#conditionData").html(
          '<p>Pressure: ' + value.pressure_in + ' in</br>' +
          'Visibility: ' + value.visibility_mi + ' mi</br>' +
          'Heat Index: ' + value.heat_index_f + ' F</br>' +
          'Dew Point: ' + value.dewpoint_f + ' F</br>' +
          'Humidity: ' + value.relative_humidity + '</br>' +
          'Precipitation: ' + value.precip_1hr_in + ' in</p>');
        $("#observationWind").html(
          '<p>Wind</br>' +
          value.wind_dir + '</br>' +
          value.wind_mph + ' mph</p>');
      })
    }
  })
});

$(document).ready(function($) {
  $.ajax({
    url: 'http://api.wunderground.com/api/214e4dd6dd0038f2/geolookup/astronomy/q/autoip.json',
    type: 'get',
    typeData: 'json',
    success: function(astronomy) {
      $(astronomy).each(function(index, value) {
        $('#sunAndMoon').html(
          '<p>Sunrise: ' + value.sun_phase.sunrise.hour + ':' + value.sun_phase.sunrise.minute + '</br>' +
          'Sunset: ' + value.sun_phase.sunset.hour + ':' + value.sun_phase.sunset.minute + '</br>' +
          'Age of Moon: ' + value.moon_phase.ageOfMoon + '</br>' +
          'Moon Phase: ' + value.moon_phase.phaseofMoon + '</p>');
      })
    }
  })
});

$(document).ready(function($) {
  $.ajax({
    url: 'http://api.wunderground.com/api/214e4dd6dd0038f2/geolookup/alerts/q/autoip.json',
    type: 'get',
    typeData: 'json',
    success: function(alert) {
      $(alert).each(function(index, value) {
        if (value.alerts.length === 0) {
          $('#alertContainer').html('');
        } else {
          $('#alertContainer').html(
            '<p class="bg-danger">Severe Weather Alert</br>' + value.alerts[0]['type'] + 
            ' ' + value.alerts[0]['date'] + '</br>' + 
            '<strong>'+value.alerts[0]['description']+'</strong>' + '</br>' +
            value.alerts[0]['message'] + '</br>' +
            'Expiration: ' + value.alerts[0]['expires'] + '</p>');
        }
      
      });
    }
  });
});