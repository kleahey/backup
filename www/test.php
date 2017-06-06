<?php
curl_setopt_array($ch = curl_init(), array(
  CURLOPT_URL => "https://api.pushover.net/1/messages.json",
  CURLOPT_POSTFIELDS => array(
    "token" => "ao5k7egtr9387tja4mtypcysoumweh",
    "user" => "uE71WWSNKmcqYrNsqzBNY86ud5ajSX",
    "message" => "Cron has been running successfully for 24 hours.",
  ),
  CURLOPT_SAFE_UPLOAD => true,
));
curl_exec($ch);
curl_close($ch);
?>