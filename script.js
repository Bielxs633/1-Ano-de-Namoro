/**
 * 
 *  Objetivo: JS para mostrar meu amor ( uoh uoh meu lençou drobado... ).
 *  Data: 01/06/25
 *  Autor: Gabriel
 *  Para: Eduarda
 *  Versão: 1.0
 **/

'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    let nextYear = now.getFullYear() + 1;
    
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    if (currentMonth < 5 || (currentMonth === 5 && currentDay < 13)) {
        nextYear = now.getFullYear();
    }
    
    const anniversaryDate = new Date(nextYear, 5, 13); // 5 = Junho (0-indexed)
    function updateCountdown() {
        const now = new Date();
        const diff = anniversaryDate - now;
        
        if (diff <= 0) {
            anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
            updateCountdown();
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    const heartsContainer = document.querySelector('.hearts-animation');
    
    function createHeart() {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '0';
        heart.style.opacity = '0';
        heart.style.animation = `float-up ${Math.random() * 3 + 2}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 300);
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    const poemLines = document.querySelectorAll('.poem p');
    poemLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }, index * 1500);
    });
});