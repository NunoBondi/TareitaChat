<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat</title>

    @vite('resources/js/app.js')

    <style>
        .container {
            margin-inline: auto;
            max-width: 640px;
        }

        .list {
            border: 1px solid;
            padding-block: 8px;
        }

        textarea {
            width: 100%;
        }
    </style>
</head>
<body>

<div class="container">
    <ul class="list">
        <li>asfsaf</li>
    </ul>

    <form class="form">
        @csrf
        <textarea name="message"></textarea>
        <div>
            <button>Send</button>
        </div>
    </form>
</div>

<script>
    window.addEventListener('DOMContentLoaded', function () {
        window.Echo.channel('messages')
            .listen('MessageCreated', function ({message}) {
                console.log(message)
            })
    })

    document.querySelector('.form').addEventListener('submit', async function (e) {
        e.preventDefault()

        const resp = await fetch('{{ action([\App\Http\Controllers\Api\MessageController::class, 'store']) }}', {
            body: new FormData(e.target),
            method: 'post',
        });
        const json = await resp.json()
        console.log({json})
    })
</script>
</body>
</html>
