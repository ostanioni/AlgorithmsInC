# project Makefile
# make printup
# $@ — содержит имя текущей цели;
# $^ — содержит список зависимостей в текущей связке
CC=gcc
CC_FLAGS=-I ./include -std=c17
CC_DEV_FLAGS=-Wall -O0 -g
CC_BUILD_FLAGS=-W0 -O3

PROGRAM_NAME=prog
OBJECT_FILES=*.o
SOURCE_FILES=print_up.c main.c

CLEAN=rm -f

$(PROGRAM_NAME): $(OBJECT_FILES)
	$(CC) $(CC_FLAGS) -o $@ $^
#	gcc -std=c17 -O3 -o printup print_up.o main.o
$(OBJECT_FILES): $(SOURCE_FILES)
	$(CC) -c $^
clean:
	$(CLEAN) *.o
	$(CLEAN) $(PROGRAM_NAME)