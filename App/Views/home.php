<!doctype html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../public/css/style.css">

    <script type="text/javascript" src="../../public/js/jquery-3.6.0.min.js" defer></script>
    <script type="text/javascript" src="../../public/js/algorithm.js" defer></script>
    <script type="text/javascript" src="../../public/js/init-frontent.js" defer></script>
    <title>Route Search</title>
</head>
<body>
<div class="container">
    <div class="title"><h1>Пошук Шляху</h1></div>
    <? if(count($points) > 0): ?>
        <div class="dropdowns">
            <div class="dropdown left">
                <div class="caption">Звідки</div>
                <div class="list">
                    <? foreach ($points as $point): ?>
                        <div class="item" data-id="<?=$point['id']?>"><?=$point['name']?></div>
                    <?endforeach;?>
                </div>
            </div>
            <div class="dropdown right">
                <div class="caption">Куди</div>
                <div class="list">
                    <? foreach ($points as $point): ?>
                        <div class="item" data-id="<?=$point['id']?>"><?=$point['name']?></div>
                    <?endforeach;?>
                </div>
            </div>
        </div>
        <div class="result_min">
            <span class="description">Найкоротший шлях:</span>
            <span class="path"></span> ––
            <span class="distance"></span>
        </div>
        <div class="result_max">
            <span class="description">Найдовший шлях:</span>
            <span class="path"></span> ––
            <span class="distance"></span>
        </div>

        <a href="#" class="button decoration save-path hidden">Зберегти шлях</a>
    <?endif;?>
</div>

</body>
</html>