'use client';

import React, { useState } from 'react';
import { Network, FileText, Database, Code, Layers, GitBranch, PlayCircle, Terminal, Box } from 'lucide-react';

const SprySimplifiedArchitecture = () => {
    const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

    const descriptions = {
        axiom: 'Core CLI command for graph operations and analysis.',
        rb: 'Runbook CLI command for workflow execution.',
        sp: 'SQLPage CLI command for web UI generation.',
        io: 'Load resources from files, URLs, or globs. Normalizes diverse sources into unified format.',
        remark: 'Parse Markdown into AST using unified and remark plugins. Enrich with semantic metadata.',
        edge: 'Build semantic relationship graphs. Create edges for dependencies, containment, and classification.',
        projection: 'Create domain-specific views: FlexibleProjection, PlaybookProjection, TreeProjection.',
        playbook: 'Task execution model. Manages runnable units with dependencies and metadata.',
        orchestrate: 'Execute tasks in topological order. Handle dependencies, parallelization, and error recovery.',
        shell: 'Low-level process spawning. Thin wrapper around Deno.Command for execution.',
        task: 'DAG execution and planning utilities.',
        code: 'Language registry and specifications.',
        render: 'Template interpolation engine.',
        directive: 'Directive parsing and handling.'
    };

    const ComponentBox = ({ id, title, subtitle, color, icon: Icon, large = false }: { id: string; title: string; subtitle?: string; color: string; icon: React.ComponentType<{ className?: string }>; large?: boolean }) => (
        <div
            className={`relative bg-white border-2 rounded-lg ${large ? 'p-4' : 'p-3'} transition-all cursor-pointer ${hoveredComponent === id
                ? `border-${color}-500 shadow-lg scale-105 z-10`
                : 'border-gray-400 hover:border-gray-500'
                }`}
            onMouseEnter={() => setHoveredComponent(id)}
            onMouseLeave={() => setHoveredComponent(null)}
            style={{ position: 'relative' }}
        >
            <div className="flex items-center gap-2 justify-center">
                {Icon && <Icon className={`${large ? 'w-5 h-5' : 'w-4 h-4'} text-${color}-600`} />}
                <div className="text-center">
                    <div className={`font-bold ${large ? 'text-base' : 'text-sm'}`}>{title}</div>
                    {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-xl">
            <div className="relative max-w-5xl mx-auto">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* CLI to Axiom connections */}
                    <line x1="25%" y1="15%" x2="50%" y2="24%" stroke="#475569" strokeWidth="2" />
                    <line x1="50%" y1="15%" x2="50%" y2="24%" stroke="#475569" strokeWidth="2" />
                    <line x1="75%" y1="15%" x2="50%" y2="24%" stroke="#475569" strokeWidth="2" />

                    {/* Axiom internal flow */}
                    <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="45%" y1="50%" x2="60%" y2="50%" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="70%" y1="50%" x2="85%" y2="50%" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Projection to Playbook */}
                    <line x1="50%" y1="57%" x2="50%" y2="67%" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Playbook to Orchestrate */}
                    <line x1="50%" y1="82%" x2="50%" y2="92%" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Axiom to Universal */}
                    <line x1="50%" y1="105%" x2="50%" y2="112%" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
                    <text x="52%" y="108.5%" fill="#475569" fontSize="12" fontFamily="monospace">uses</text>

                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#7c3aed" />
                        </marker>
                    </defs>
                </svg>

                {/* CLI Layer */}
                <div className="relative mb-6 p-6 bg-white rounded-lg border-4 border-slate-700 shadow-lg" style={{ zIndex: 1 }}>
                    <div className="text-center font-bold text-slate-800 mb-4 text-lg uppercase tracking-wide">
                        Spry CLI
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <ComponentBox id="axiom" title="axiom" subtitle="(graph)" color="blue" icon={Network} large />
                        <ComponentBox id="rb" title="rb" subtitle="(runbook)" color="blue" icon={FileText} large />
                        <ComponentBox id="sp" title="sp" subtitle="(sqlpage)" color="blue" icon={Database} large />
                    </div>
                </div>

                {/* Axiom Layer */}
                <div className="relative mb-6 p-8 bg-purple-50 rounded-lg border-4 border-purple-700 shadow-lg" style={{ zIndex: 1 }}>
                    <div className="text-center mb-2">
                        <div className="font-bold text-purple-900 text-lg">lib/axiom</div>
                        <div className="text-sm text-purple-700 italic">[Semantic Graph Engine]</div>
                    </div>

                    {/* Top row - Pipeline */}
                    <div className="grid grid-cols-4 gap-4 mb-8 mt-6">
                        <ComponentBox id="io" title="io" subtitle="(loader)" color="purple" icon={FileText} />
                        <ComponentBox id="remark" title="remark" subtitle="(plugins)" color="purple" icon={Code} />
                        <ComponentBox id="edge" title="edge" subtitle="(rules)" color="purple" icon={GitBranch} />
                        <ComponentBox id="projection" title="projection" subtitle="(views)" color="purple" icon={Layers} />
                    </div>

                    {/* Middle - Playbook Model */}
                    <div className="flex justify-center mb-8">
                        <div className="w-1/2">
                            <ComponentBox
                                id="playbook"
                                title="Playbook/Task Model"
                                subtitle=""
                                color="purple"
                                icon={Box}
                                large
                            />
                        </div>
                    </div>

                    {/* Bottom - Orchestrate */}
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <ComponentBox
                                id="orchestrate"
                                title="orchestrate"
                                subtitle="(runner)"
                                color="purple"
                                icon={PlayCircle}
                                large
                            />
                        </div>
                    </div>
                </div>

                {/* Universal Layer */}
                <div className="relative p-6 bg-white rounded-lg border-4 border-slate-700 shadow-lg" style={{ zIndex: 1 }}>
                    <div className="text-center mb-2">
                        <div className="font-bold text-slate-800 text-lg">lib/universal</div>
                        <div className="text-sm text-slate-600 italic">[Shared Utilities]</div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mt-6">
                        <ComponentBox id="shell" title="shell" subtitle="" color="orange" icon={Terminal} />
                        <ComponentBox id="task" title="task" subtitle="(DAG)" color="orange" icon={PlayCircle} />
                        <ComponentBox id="code" title="code" subtitle="(lang)" color="orange" icon={Code} />
                        <ComponentBox id="render" title="render" subtitle="(template)" color="orange" icon={FileText} />
                        <ComponentBox id="directive" title="directive" subtitle="" color="orange" icon={Terminal} />
                    </div>
                </div>
            </div>

            {/* Description Panel */}
            {hoveredComponent && (
                <div className="mt-6 p-5 bg-white rounded-lg shadow-xl border-2 border-slate-400 max-w-3xl mx-auto">
                    <h3 className="font-bold text-lg text-slate-800 mb-2 capitalize">
                        {hoveredComponent}
                    </h3>
                    <p className="text-sm text-slate-700">
                        {descriptions[hoveredComponent as keyof typeof descriptions] || 'Component description'}
                    </p>
                </div>
            )}

            {/* Legend */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border-2 border-slate-300">
                    <div className="w-5 h-5 bg-slate-700 rounded"></div>
                    <span className="text-sm font-medium text-slate-700">Layer Boundaries</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border-2 border-slate-300">
                    <div className="w-5 h-1 bg-purple-600 rounded"></div>
                    <span className="text-sm font-medium text-slate-700">Data Flow</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow border-2 border-slate-300">
                    <div className="w-5 h-1 bg-slate-500 rounded" style={{ borderTop: '2px dashed #64748b' }}></div>
                    <span className="text-sm font-medium text-slate-700">Uses/Depends</span>
                </div>
            </div>
        </div>
    );
};

export default SprySimplifiedArchitecture;