#!/usr/bin/env ruby


def usage
  return "\n Uso: \n decree_number_generator.rb DESDE HASTA AÑO \n decree_number_generator.rb 23 27 2016 \ngenera \n 23/2016 \n 24/2016 \n 25/2016\n 26/2016 \n 27/2016\n received arguments: #{ARGV}"
end
raise ArgumentError, "no hay suficientes parametros\n #{usage()}"if (ARGV.length < 3);

puts "creando numeros de decreto desde #{ARGV[0]} hasta #{ARGV[1]} año #{ARGV[2]}";


def create_range
  (ARGV[0]..ARGV[1]).each { |index|
    puts "#{index}/#{ARGV[2]}";
  }
end

create_range()
