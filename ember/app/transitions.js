export default function() {
  this.transition(
    this.fromRoute('index'),
    this.use('cardFlip', { duration: 300, direction: 'right' } ),
    this.reverse('cardFlip', { duration: 300, direction: 'left' } )
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('contact/success'),
    this.use('fade')
  );
  this.transition(
    this.fromRoute('contact/success'),
    this.toRoute('index'),
    this.use('wait', 1500, {then: 'cardFlip', opts: {duration: 300, direction: 'left'}} )
  );
}
