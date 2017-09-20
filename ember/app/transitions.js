export default function() {
  if($(window).width() >= 600) {
    this.transition(
      this.fromRoute('index'),
      this.use('cardFlip', { duration: 500, direction: 'right' } ),
      this.reverse('cardFlip', { duration: 500, direction: 'left' } )
    );
  } else {
    this.transition(
      this.fromRoute('index'),
      this.use('fade', { duration: 100 }),
      this.reverse('fade', { duration: 100 })
    );
  }
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('success'),
    this.use('fadeChild')
  );
  this.transition(
    this.fromRoute('success'),
    this.toRoute('index'),
    this.use('cardFlip', { duration: 500, direction: 'left' } )
  );
}
