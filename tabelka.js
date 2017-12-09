function Rysuj (kolumna1, kolumna2) 
{
	var $tr = $('<tr />');
	var $td1 = $('<td />', { 'class': 'text-edit', 'contenteditable': 'true' }).html(kolumna1);
	var $td2 = $('<td />', { 'class': 'text-edit', 'contenteditable': 'true' }).html(kolumna2);
	var $td3 = $('<td />');
	var $btnDelete = $('<input />', { 'type': 'button', 'value': 'Delete', 'class': 'delete-tr' });
	return $tr.append($td1).append($td2).append($td3.append($btnDelete));
}

function Koloruj () {
	$('#tabela tbody').children('tr').each(function (index) {
		if (index % 2 == 0) {
			$(this).css({
				'background-color': 'red'
			});
		} else {
			$(this).css({
				'background-color': '#fff'
			});
		}
	});
}

$(document).ready(function () {

	Koloruj();




	$(document).on('click', '.add-tr', function () {
		$('#tabela tbody').append(Rysuj('kolumna 1', 'kolumna 2'));
		Koloruj();
	});

	$(document).on('click', '.delete-tr', function () {
		$(this).parent().parent().remove();
		Koloruj();
	});

	
});



