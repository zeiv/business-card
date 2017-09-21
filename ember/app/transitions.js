export default function() {
  this.transition(
    this.fromRoute('index'),
    this.use('cardFlip', { duration: 600, direction: 'right' } ),
    this.reverse('cardFlip', { duration: 600, direction: 'left' } )
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('success'),
    this.use('fadeChild')
  );
  this.transition(
    this.fromRoute('success'),
    this.toRoute('index'),
    this.use('cardFlip', { duration: 800, direction: 'left' } )
  );
}
