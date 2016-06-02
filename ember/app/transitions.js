export default function() {
  this.transition(
    this.fromRoute('index'),
    this.use('cardFlip', { duration: 300, direction: 'right' } ),
    this.reverse('cardFlip', { duration: 300, direction: 'left' } )
  );
}
