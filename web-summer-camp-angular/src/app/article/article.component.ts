import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  public articleContent: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchArticle();
  }

  fetchArticle() {
    // Simulate fetching article content from an API
    const fetchedHtmlContent = `
  <h1>Understanding Angular Security</h1>
  <img src="invalid-image" onerror="alert('XSS Attack!')" />
  <p><strong>Introduction:</strong> Angular provides a robust platform for building dynamic and secure web applications. However, understanding security nuances is crucial for developers.</p>
  <h2>XSS Vulnerabilities</h2>
  <p>Cross-Site Scripting (XSS) is a common security vulnerability that can be introduced when user-generated content is improperly sanitized.</p>
  <blockquote>
    XSS attacks enable attackers to inject malicious scripts into content viewed by other users.
  </blockquote>
  <h3>Types of XSS Attacks</h3>
  <ul>
    <li><strong>Stored XSS:</strong> Occurs when malicious script is inserted directly into a database.</li>
    <li><strong>Reflected XSS:</strong> The script is reflected off a web server, such as in an error message.</li>
    <li><strong>DOM-based XSS:</strong> The vulnerability exists in the client-side code rather than the server-side code.</li>
  </ul>
  <h2>Angular's Defense Mechanisms</h2>
  <p>Angular provides built-in protection against XSS via content sanitization. It identifies and neutralizes potentially hazardous elements.</p>
  <h3>Using Sanitization</h3>
  <p>Angular's <code>DomSanitizer</code> helps in inspecting and cleaning the HTML received from the server before rendering it to the browser.</p>
  <figure>
    <figcaption>Fig1. - Angular Sanitization Process.</figcaption>
  </figure>
  <p><em>Conclusion:</em> While Angular provides tools to help secure your application, understanding and properly implementing security measures is essential for every developer to prevent XSS and other vulnerabilities.</p>
`;


    // Sanitize the fetched content
    this.articleContent = this.sanitizer.bypassSecurityTrustHtml(fetchedHtmlContent);

  }
}

