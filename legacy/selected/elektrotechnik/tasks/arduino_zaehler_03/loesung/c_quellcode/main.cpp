#include <avr/io.h>
#include <stdint.h>
#include <util/delay.h>

int main(void)
{

  DDRB = 0b00000000;  // PortB auf Input
  PORTB = 0b00000100; // PB1 und PB2 Pullup
  DDRD = 0b11111111;  // PortD auf Output

  uint8_t zaehler = 0;

  while (1)
  {
    while (PINB & 0b00000100) // Warten auf Tastendruck
    {
    }
    zaehler++;       // Zähler inkrement
    PORTD = zaehler; // Zähler an PortD ausgeben
    _delay_ms(500);
  }
}