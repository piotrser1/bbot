module.exports = {
    name: 'pomoc',
    description: 'wyświetla dostępne komendy',
    execute(message, args) {
        message.channel.send('```=testafk - wyświetla czy bot jest online```')
        message.channel.send('```=ankieta (tekst) - tworzy ankietę w której społeczność może głosować```')
        message.channel.send('```=clear (liczba wiadomości które chcesz usunąć) - usuwa daną liczbę wiadomości na kanale na którym została napisana komenda```')

    }
}