<!DOCTYPE html>
<html>
  <head>
    <title>Schedule App</title>
    <style>
      /* Body styles */
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
      }

      /* Word doc styles */
      .word-doc {
        width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 10px #ccc;
        border-radius: 5px;
        min-height: 500px;
      }

      .word-doc h2 {
        margin-top: 0;
        text-align: center;
        font-size: 28px;
        color: #333;
      }

      .word-doc textarea {
        width: 100%;
        height: 400px;
        padding: 10px;
        margin-bottom: 15px;
        border: none;
        background-color: #f0f0f0;
        border-radius: 5px;
        font-size: 16px;
        color: #333;
        resize: none;
      }

           .word-doc input[type="submit"] {
        width: 100%;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;
      }

      .word-doc input[type="submit"]:hover {
        background-color: #3e8e41;
      }
    </style>
  </head>
  <body>
    <div class="word-doc">
      <h2>Write and Save Your Works</h2>
      <form>
        <textarea name="text"></textarea>
        <input type="submit" value="Save">
      </form>
    </div>
  </body>
</html>

